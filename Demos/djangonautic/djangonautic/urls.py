from django.conf.urls import url, include #includes urls from other files
from django.contrib import admin
from . import views # . means from the same directory
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^articles/', include('articles.urls')),
    url(r'^about/$', views.about),
    url(r'^$', views.homepage) #looking for just .com
]


urlpatterns += staticfiles_urlpatterns()