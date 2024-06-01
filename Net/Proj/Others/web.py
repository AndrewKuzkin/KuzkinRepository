from scapy.all import *

def http_packet_analyzer(packet):
    if packet.haslayer(TCP) and packet.haslayer(Raw):
        if packet[TCP].dport == 8080 or packet[TCP].sport == 8080:
            http_data = str(packet[Raw].load)
            if "SELECT" in http_data.upper() or "INSERT" in http_data.upper() or "UPDATE" in http_data.upper():
                print("Потенциальная SQL инъекция обнаружена:")
                print(f"Информация о пакете:\n{packet.summary()}")
                print(f"HTTP данные:\n{http_data}\n")

sniff(filter="tcp port 8080", prn=http_packet_analyzer)


