#!/usr/bin/env python3
"""
CV PDF Generator for Trần Ngọc Huy's Portfolio
Uses Chrome DevTools Protocol to export a pristine 2-page A4 PDF without browser headers/footers.
"""
import sys
import os
import base64
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

sys.stdout.reconfigure(encoding='utf-8')

def generate(url="http://localhost:3000/resume", output_path="public/Tran-Ngoc-Huy-CV.pdf"):
    opts = Options()
    opts.add_argument('--headless')
    opts.add_argument('--disable-gpu')
    opts.add_argument('--no-sandbox')
    opts.add_argument('--window-size=1200,1600')
    driver = webdriver.Chrome(options=opts)
    try:
        print(f"Loading {url}...")
        driver.get(url)
        driver.implicitly_wait(3)
        
        # A4 portrait: 210mm x 297mm (8.2677 x 11.6929 inches)
        params = {
            "paperWidth": 8.2677,
            "paperHeight": 11.6929,
            "printBackground": True,
            "preferCSSPageSize": True,
            "displayHeaderFooter": False,
            "marginTop": 0,
            "marginBottom": 0,
            "marginLeft": 0,
            "marginRight": 0,
        }
        res = driver.execute_cdp_cmd("Page.printToPDF", params)
        data = base64.b64decode(res['data'])
        os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
        with open(output_path, 'wb') as f:
            f.write(data)
        print(f"Successfully generated PDF: {output_path} ({len(data)} bytes)")
    finally:
        driver.quit()

if __name__ == "__main__":
    target_url = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3000/resume"
    out = sys.argv[2] if len(sys.argv) > 2 else "public/Tran-Ngoc-Huy-CV.pdf"
    generate(target_url, out)
