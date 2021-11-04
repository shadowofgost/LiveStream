#!./env python
# -*- coding: utf-8 -*-
'''
#@Time             : 2021-09-24 22:50:07
#@Author           : Albert Wang
#@Email            : shadowofgost@outlook.com
#@Software         : Vscode
#@FilePath         : /LiveStream/manage.py
#@Copyright Notice : Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
#@Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
#@Description      :
#@LastTime         : 2021-11-04 22:39:45
#@LastAuthor       : Albert Wang
'''
#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "LiveStream.settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == "__main__":
    main()
