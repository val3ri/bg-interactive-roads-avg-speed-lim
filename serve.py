#!/usr/bin/env python3
"""Local dev server that mimics Cloudflare Pages' clean-URL rewriting
(e.g. /statistika -> statistika.html, /en/statistika -> en/statistika.html)."""
import http.server
import os
import socketserver
import urllib.parse

PORT = 8000


class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        parsed = urllib.parse.urlsplit(path)
        fs_path = super().translate_path(parsed.path)

        if not os.path.isdir(fs_path) and not os.path.splitext(fs_path)[1]:
            html_path = fs_path + '.html'
            if os.path.isfile(html_path):
                return html_path

        return fs_path

    def send_error(self, code, message=None, explain=None):
        if code == 404:
            not_found = os.path.join(os.getcwd(), '404.html')
            if os.path.isfile(not_found):
                self.send_response(404)
                self.send_header('Content-type', 'text/html; charset=utf-8')
                self.end_headers()
                with open(not_found, 'rb') as f:
                    self.wfile.write(f.read())
                return
        super().send_error(code, message, explain)


if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    with socketserver.TCPServer(('', PORT), CleanURLHandler) as httpd:
        print(f'Serving at http://localhost:{PORT}')
        httpd.serve_forever()
