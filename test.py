import requests
import random
import time

def send_request():
    random_qq = random.randint(100000, 99999999)
    url = f"https://aaa/cx/?n=qb&qq={random_qq}"
    try:
        response = requests.get(url)
        print(f"success:{response.status_code}，{url}")
    except requests.RequestException as e:
        print(f"fail:{e}")

def generate_bulk_requests(count):
    for _ in range(count):
        send_request()
        time.sleep(0.01)

generate_bulk_requests(100000)
