import requests
import random
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

def send_request():
    random_qq = random.randint(100000, 99999999)
    url = f"https://aaa/cx/?n=qb&qq={random_qq}"
    try:
        response = requests.get(url)
        print(f"success:{response.status_code}，{url}")
    except requests.RequestException as e:
        print(f"fail:{e}")

def generate_bulk_requests(count, thread_count):
    with ThreadPoolExecutor(max_workers=thread_count) as executor:
        futures = [executor.submit(send_request) for _ in range(count)]
        for future in as_completed(futures):
            future.result()  # Wait for each future to complete

# 200 threads
generate_bulk_requests(100000, 200)
