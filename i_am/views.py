from django.shortcuts import render
from django.views import View

class MainView(View):
    
    def get(self, request):
        return render(request, 'i_am/index.html')

class OldView(View):

    def get(self, request):
        return render(request, 'i_am/old_terminal.html')
