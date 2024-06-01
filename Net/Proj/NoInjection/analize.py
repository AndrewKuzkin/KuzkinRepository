from flask import Flask, request
from scapy.all import *

app = Flask(__name__)

def analyze_sql_injection(packet):
    if packet.haslayer(Raw):
        load = packet[Raw].load.decode('utf-8', errors='ignore')
        if 'SELECT' in load.upper():
            return "Potential SQL injection detected:\n{}".format(load)
    return None

@app.route('/', methods=['POST'])
def analyze_request():
    packet = IP(dst="127.0.0.1")/TCP(dport=5000)/Raw(load=request.data)
    result = analyze_sql_injection(packet)
    if result:
        return result
    else:
        return "No SQL injection detected."

if __name__ == '__main__':
    sniff(filter="tcp port 5000", prn=lambda x: x.show(), store=0)  # Перехватываем пакеты на порту 5000
    app.run(port=5000)


