from selenium import webdriver
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome(executable_path=r'C:\Users\liama\Desktop\webdrivers\chromedriver.exe')

# 1.Testing the Routes on the Navbar 
driver.get('http://localhost:3000/')                                    
time.sleep(2)                                                           
link = WebDriverWait(driver, 10).until(             
        EC.presence_of_element_located((By.ID, "toArtists"))           
        )
link.click()                                                           
time.sleep(2)                                                           


driver.get('http://localhost:3000/')                                   
link = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "toTracks"))
    )
link.click()
time.sleep(2)

# 2.Testing the Buttons 
driver.get('http://localhost:3000/')
time.sleep(2)

button = button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "exploreArtists"))
    )
button.click()
time.sleep(2)

driver.get('http://localhost:3000/')
time.sleep(2)
button = button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "exploreTracks"))
    )
button.click()

time.sleep(2)
button = button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "exploreTracks"))
    )
button.click()

time.sleep(2)
button = button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "Login"))
    )
button.click()

time.sleep(1)
login = driver.find_element(By.ID, "login-username")
login.send_keys("Liamaspell123@gmail.com")
time.sleep(2)


login = driver.find_element(By.ID, "login-password")
login.send_keys("ilikelfc12")
time.sleep(2)


button = button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "login-button"))
    )
button.click()
time.sleep(2)

button = button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "Logout"))
    )
button.click()

time.sleep(2)
driver.quit()


