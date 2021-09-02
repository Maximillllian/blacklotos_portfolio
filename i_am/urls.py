from django.urls import path
from .views import MainView, OldView

urlpatterns = [
    path('', MainView.as_view(), name='index'),
    path('old', OldView.as_view(), name="old")
]