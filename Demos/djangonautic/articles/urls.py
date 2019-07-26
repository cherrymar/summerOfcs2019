from django.conf.urls import url
from . import views # . means from the same directory

urlpatterns = [
    url(r'^$', views.article_list) #looking for just .com
]
