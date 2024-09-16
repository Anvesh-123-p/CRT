from django.urls import path
from .view_college import *
from .views_approval import *
from .view_class import *
from .view_user import *
from .views_lsp import *
from .views_password_reset import *
from .view_subject import *
from .views_topics import *
urlpatterns = [
    path("api/college/", CollegeDetailsView.as_view()),
    path("api/class/", ClassDetailView.as_view()),
    path("api/users/", UserView.as_view()),
    path("api/subjects/", SubjectView.as_view()),

    path("api/approval/", ApprovalView.as_view()),
    path('api/password-reset/', PasswordResetView.as_view(), name='password-reset'),
#     path('api/topic/', TopicDetailView.as_view(), name='topics'),
#     path('api/lessonplan/', LessonPlanCreateView.as_view(), name='topics'),
# 7
]

