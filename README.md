# Hugo-Health-Development-Task

## Steps to run:
#### Install [baker](https://docs.getbaker.io/installation/)
+ **Prereqs**  
To run baker, you will need vagrant and virtual box on your system.  

  Install Baker by following the instructions on [Baker documentation](https://docs.getbaker.io/installation/).
+ **First time setup**  
Setup `baker`  

  ```
  baker setup
  ```

+ **Create a VM with baker**   
  ```
  baker bake2 --repo https://github.com/prerit2803/Hugo-Health-Development-Task.git
  ```

  If something goes wrong, and you want to run again, you can switch over to the "local" version of the command, to reinitialized the baker-test directory: `baker bake2 --local .`   
+ **SSH into the baker machine**  
To SSH into the machine, run the following   
```
baker ssh Hugo-Health-Docker
```
#### Change the working directory  
```
cd /Hugo-Health-Development-Task
```
#### Docker Image Build instructions
+ Run the following command: 
  ```
  docker build -t prerit/hugo-health-task .
  ```
#### Docker Image Run instructions
+ Once the docker image build is successful, execute the following command:
```
docker run -e "cryptoCurrencyName=<CRYPTO-CURRENCY-NAME>" -it prerit/hugo-health-task
```
Example:  
``` 
docker run -e "cryptoCurrencyName=ethereum" -it prerit/hugo-health-task
```
