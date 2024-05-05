from django.shortcuts import render
import json

# Create your views here.
def index(request):
    file = open('jsondata.json','r',encoding='utf-8')
    finalData = file.read()
    dashboardData = {"data" : finalData}
    return render(request,'index.html',dashboardData)

def dashboard(request):
    file = open('jsondata.json','r',encoding='utf-8')
    finalData = file.read()
    dashboardData = {"data" : finalData}
    return render(request,'dashboard.html',dashboardData)

def reports(request):
    file = open('jsondata.json','r',encoding='utf-8')
    finalData = file.read()
    dashboardData = {"data" : finalData}
    return render(request,'reports.html',dashboardData)


