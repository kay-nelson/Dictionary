from django.urls import path
from . import views

urlpatterns = [
    path("words/", views.WordListCreate.as_view(), name="word-list")
]