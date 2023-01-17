from selenium import webdriver
import time
# specify the path to the webdriver executable
driver = webdriver.Chrome(executable_path=r'C:\Users\liama\Desktop\webdrivers\chromedriver.exe')

# navigate to a website
driver.get('http://localhost:3000/')
time.sleep(2)
driver.get('http://localhost:3000/Artists')
time.sleep(2)

driver.get('http://localhost:3000/Tracks')
time.sleep(2)
# interact with the page (example: search for "selenium webdriver")
#search_box = driver.find_element_by_name('q')
#search_box.send_keys('selenium webdriver')
#search_box.submit()

# close the browser window
driver.quit()