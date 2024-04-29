"""
Django settings for proj_base project.

Generated by 'django-admin startproject' using Django 4.2.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

from datetime import timedelta
from pathlib import Path
import os
import sys

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent # .../proj_base
# BASE_DIR = Path(__file__).resolve().parent.parent.parent # .../proj_base
un_release = True

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-f5=+i&=o8(+zd*@63hw7h=%6fze@&gq5+63op@fxf+s%#5=@+l"

# SECURITY WARNING: don't run with debug turned on in production!
if un_release:
    DEBUG = True
    ALLOWED_HOSTS = []
else:
    DEBUG = False
    ALLOWED_HOSTS = ['*',]


# Application definition
sys.path.insert(0, os.path.join(BASE_DIR, 'apps')) # 添加apps目录到系统路径
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    'my_app',
    'rest_framework', # pip install djangorestframework
    'rest_framework_simplejwt', # pip install djangorestframework_simplejwt
    # 'DjangoUeditor',
    # 'django_ckeditor_5', # pip install django-ckeditor-5
    'ckeditor', # pip install django-ckeditor
    'ckeditor_uploader',
    'userapp',
    'verifycode', # 验证码
    'haystack', 
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "proj_base.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.jinja2.Jinja2",
        "DIRS": [os.path.join(BASE_DIR, "templates")],
        "APP_DIRS": True, # 为True时，会在每个app下的templates文件夹中查找模板文件
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
                # 因Jinja2不能直接使用context_processors中的内容
            ],
            # 补充Jinja2模板引擎的环境变量
            "environment": "proj_base.utils.jinja2_env.environment",
        },
    },
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [os.path.join(BASE_DIR, "templates")],
        "APP_DIRS": True, # 为True时，会在每个app下的templates文件夹中查找模板文件
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "proj_base.wsgi.application"


# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

# sqlite3
# DATABASES = {
#     "default": {
#         "ENGINE": "django.db.backends.sqlite3",
#         "NAME": BASE_DIR / "db.sqlite3",
#     }
# }
# mysql
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'blog11', # 数据库名
        'USER': 'root',
        'PASSWORD': 'root',
        'HOST': os.getenv('WINDOWS_IP', 'localhost'),
        # 'HOST': 'localhost',
        # 'HOST': 'host.docker.internal', # docker中访问宿主机
        'PORT': '3306',
        'CONN_MAX_AGE': 600,  # 10 minutes
    }
}

# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

# LANGUAGE_CODE = "en-us"
LANGUAGE_CODE = 'zh-hans'

# TIME_ZONE = "UTC"
TIME_ZONE = 'Asia/Shanghai'

USE_I18N = True

USE_TZ = True # False 时为东八区时间(即显示时间=标准时间+8)


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

if un_release:
    # 开发环境下，静态文件路径
    STATICFILES_DIRS = [
        BASE_DIR / 'static',
    ]
    STATIC_URL = 'static/'
    # 生产环境下，静态文件路径
    # STATIC_ROOT = os.path.join(BASE_DIR, 'static') # collectstatic 复制到的文件夹

    # Media files
    MEDIA_URL = 'media/' # 不能在static文件夹下(django 某个版本之后的要求)
    MEDIA_ROOT = os.path.join(BASE_DIR, 'media') # .../blog/media
    THUMB_DIR = os.path.join(BASE_DIR, 'media/thumb')
else:
    # 部署之后的静态文件路径
    STATIC_ROOT = '/var/www/blog/static/'
    STATIC_URL = 'static/'
    # 上传的文件路径需要修改成部署之后的静态文件夹路径
    MEDIA_ROOT = os.path.join(STATIC_ROOT, "media")
    MEDIA_URL = 'media/'
    THUMB_DIR = os.path.join(STATIC_ROOT, 'media/thumb/')

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# django-ckeditor
CKEDITOR_UPLOAD_PATH = "uploads/"
# django-ckeditor-5
# customColorPalette = [
#     {
#         'color': 'hsl(4, 90%, 58%)',
#         'label': 'Red'
#     },
#     {
#         'color': 'hsl(340, 82%, 52%)',
#         'label': 'Pink'
#     },
#     {
#         'color': 'hsl(291, 64%, 42%)',
#         'label': 'Purple'
#     },
#     {
#         'color': 'hsl(262, 52%, 47%)',
#         'label': 'Deep Purple'
#     },
#     {
#         'color': 'hsl(231, 48%, 48%)',
#         'label': 'Indigo'
#     },
#     {
#         'color': 'hsl(207, 90%, 54%)',
#         'label': 'Blue'
#     },
# ]
# CKEDITOR_5_CUSTOM_CSS = 'path_to.css' # optional
# CKEDITOR_5_FILE_STORAGE = "path_to_storage.CustomStorage" # optional
# CKEDITOR_5_CONFIGS = {
#     'default': {
#         'toolbar': ['heading', '|', 'bold', 'italic', 'link',
#                     'bulletedList', 'numberedList', 'blockQuote', 'imageUpload', ],

#     },
#     'extends': {
#         'blockToolbar': [
#             'paragraph', 'heading1', 'heading2', 'heading3',
#             '|',
#             'bulletedList', 'numberedList',
#             '|',
#             'blockQuote',
#         ],
#         'toolbar': ['heading', '|', 'outdent', 'indent', '|', 'bold', 'italic', 'link', 'underline', 'strikethrough',
#         'code','subscript', 'superscript', 'highlight', '|', 'codeBlock', 'sourceEditing', 'insertImage',
#                     'bulletedList', 'numberedList', 'todoList', '|',  'blockQuote', 'imageUpload', '|',
#                     'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'mediaEmbed', 'removeFormat',
#                     'insertTable',],
#         'image': {
#             'toolbar': ['imageTextAlternative', '|', 'imageStyle:alignLeft',
#                         'imageStyle:alignRight', 'imageStyle:alignCenter', 'imageStyle:side',  '|'],
#             'styles': [
#                 'full',
#                 'side',
#                 'alignLeft',
#                 'alignRight',
#                 'alignCenter',
#             ]

#         },
#         'table': {
#             'contentToolbar': [ 'tableColumn', 'tableRow', 'mergeTableCells',
#             'tableProperties', 'tableCellProperties' ],
#             'tableProperties': {
#                 'borderColors': customColorPalette,
#                 'backgroundColors': customColorPalette
#             },
#             'tableCellProperties': {
#                 'borderColors': customColorPalette,
#                 'backgroundColors': customColorPalette
#             }
#         },
#         'heading' : {
#             'options': [
#                 { 'model': 'paragraph', 'title': 'Paragraph', 'class': 'ck-heading_paragraph' },
#                 { 'model': 'heading1', 'view': 'h1', 'title': 'Heading 1', 'class': 'ck-heading_heading1' },
#                 { 'model': 'heading2', 'view': 'h2', 'title': 'Heading 2', 'class': 'ck-heading_heading2' },
#                 { 'model': 'heading3', 'view': 'h3', 'title': 'Heading 3', 'class': 'ck-heading_heading3' }
#             ]
#         }
#     },
#     'list': {
#         'properties': {
#             'styles': 'true',
#             'startIndex': 'true',
#             'reversed': 'true',
#         }
#     }
# }

# django-haystack
HAYSTACK_CONNECTIONS = {
    "default": {
        "ENGINE": "haystack.backends.whoosh_cn_backend.WhooshEngine",
        "PATH": os.path.join(BASE_DIR, "whoosh_index"),
    },
}
# 当添加、修改、删除数据时，自动更新索引
HAYSTACK_SIGNAL_PROCESSOR = "haystack.signals.RealtimeSignalProcessor"
# 搜索结果分页
HAYSTACK_SEARCH_RESULTS_PER_PAGE = 5

# redis
REDIS_HOST = '127.0.0.1'
# REDIS_HOST = os.getenv('WINDOWS_IP', 'localhost') # 默认值为 '127.0.0.1'
# REDIS_HOST = os.getenv('WSL_IP', 'localhost') # 默认值为 '127.0.0.1'
# print(f"REDIS_HOST: {REDIS_HOST}")
REDIS_PORT = 6379
REDIS_DB = 0
#django-redis
CACHES = {
    "default": { # 默认
        "BACKEND": "django_redis.cache.RedisCache",
        # "LOCATION": "redis://127.0.0.1:6379/0",
        "LOCATION": f"redis://{REDIS_HOST}:{REDIS_PORT}/{REDIS_DB}",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        }
    },
    "session": { # session
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": f"redis://{REDIS_HOST}:{REDIS_PORT}/{1}",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        }
    },
    "verify_code": { # 验证码
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": f"redis://{REDIS_HOST}:{REDIS_PORT}/{2}",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        }
    },
}
# session引擎
SESSION_ENGINE = "django.contrib.sessions.backends.cache"
# session别名 指向的是上面的session 即1号库
SESSION_CACHE_ALIAS = "session"

# rest_framework
REST_FRAMEWORK = {
    # api 文档
    'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema',
    # 分页
    # 'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    # 'PAGE_SIZE': 10 # 每页显示的数据条数
    # 默认认证方式
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication', # jwt认证
        # 如果第一个认证出现bug,则会使用第二个认证
        # 'rest_framework.authentication.BasicAuthentication', # 基本认证
        # 'rest_framework.authentication.SessionAuthentication', # session认证
    ],
    # 默认权限 不建议使用，对非登录视图都会生效，这样会导致接口文档无法访问，当然也可以改写接口文档的权限或视图
    # 'DEFAULT_PERMISSION_CLASSES': [
    #     'rest_framework.permissions.IsAuthenticated', # 必须登录才能访问
    # ],
    # 限流
    # 'DEFAULT_THROTTLE_CLASSES': (
    #     'rest_framework.throttling.AnonRateThrottle', # 匿名用户{其实是根据ip限量}
    #     'rest_framework.throttling.UserRateThrottle' # 认证用户
    # ),
    # 'DEFAULT_THROTTLE_RATES': {
    #     'anon': '2/minute',
    #     'user': '1000/day'
    # }
}

# rest_framework_simplejwt
SIMPLE_JWT = {
    # access token 的 有效时间
    # 'ACCESS_TOKEN_LIFETIME': timedelta(minutes=5),
    'ACCESS_TOKEN_LIFETIME': timedelta(hours=1),
    # 修改认证结果(token和access_token)
}

# 如果要使用自定义的用户模型，需要在 settings.py 中添加 AUTH_USER_MODEL 配置项，指定自定义的用户模型
AUTH_USER_MODEL = 'userapp.MyUser'

# 指定自定义的用户认证后端(不使用默认的认证后端)
# AUTHENTICATION_BACKENDS = []

# 配置项⽬⽇志
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,  # 是否禁⽤已经存在的⽇志器
    'formatters': {  # ⽇志信息显示的格式
        'verbose': {
            'format': '%(levelname)s %(asctime)s %(module)s %(lineno)d %(message)s'
        },
        'simple': {
            'format': '%(levelname)s %(module)s %(lineno)d %(message)s'
        },
    },
    'filters': {  # 对⽇志进⾏过滤
        'require_debug_true': {  # django在debug模式下才输出⽇志
            '()': 'django.utils.log.RequireDebugTrue',
        },
    },
    'handlers': {  # ⽇志处理⽅法
        'console': {  # 向终端中输出⽇志
            'level': 'INFO',
            'filters': ['require_debug_true'],
            'class': 'logging.StreamHandler',
            'formatter': 'simple'
        },
        'file': {  # 向⽂件中输出⽇志
            'level': 'INFO',
            'class': 'logging.handlers.RotatingFileHandler',
            'filename': os.path.join(BASE_DIR, 'logs/proj_base.log'),  # ⽇志⽂件的位置
            'maxBytes': 300 * 1024 * 1024,
            'backupCount': 10,
            'formatter': 'verbose'
        },
    },
    'loggers': {  # ⽇志器
        'django': {  # 定义了⼀个名为django的⽇志器
            'handlers': ['console', 'file'],  # 可以同时向终端与⽂件中输出⽇志
            'propagate': True,  # 是否继续传递⽇志信息
            'level': 'INFO',  # ⽇志器接收的最低⽇志级别
        },
    }
}

# 互亿无线 短信平台
APIID = 'C18364283'
APIKEY = '4fd3425525bed15cd44c3674320671db'

# from django.conf import settings, global_settings

# custom authentication
AUTHENTICATION_BACKENDS = ['userapp.auth.MutiIdentityLoginAuth']

# 指定登录首页请求地址
LOGIN_URL = '/login/'
