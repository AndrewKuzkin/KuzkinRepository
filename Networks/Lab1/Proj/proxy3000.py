from mitmproxy import http

def response(flow: http.HTTPFlow) -> None:
    if flow.request.pretty_url.startswith("http://192.168.1.75:3000"):
        if "sql" in flow.request.text:
            print("Potential SQL injection detected in request:")
            print(flow.request.text)

