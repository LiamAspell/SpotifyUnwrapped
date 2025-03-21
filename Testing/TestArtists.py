from selenium import webdriver
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

Email = "test@gmail.com"
Password = "test123"

driver = webdriver.Chrome(executable_path=r'C:\Users\liama\Desktop\webdrivers\chromedriver.exe')

driver.get('http://localhost:3000/Artists')    

time.sleep(2)   
button = button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "Login"))
    )
button.click()

login = driver.find_element(By.ID, "login-username")
login.send_keys(Email)
time.sleep(2)


login = driver.find_element(By.ID, "login-password")
login.send_keys(Password)
time.sleep(2)

button = button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "login-button"))
    )
button.click()
time.sleep(2)

button = button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "findArtists"))
    )
button.click()
time.sleep(2)

Modal =""
button = button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, Modal)) 
    )

#button.click()
time.sleep(2)

Player = ""
button = button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "Player")) 
    )

#button.click()
time.sleep(2)

button = button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "Logout"))
    )
button.click()

time.sleep(2) 