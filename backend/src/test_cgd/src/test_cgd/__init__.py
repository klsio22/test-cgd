"""Init and utils."""
from zope.i18nmessageid import MessageFactory

import logging


PACKAGE_NAME = "test_cgd"

_ = MessageFactory("test_cgd")

logger = logging.getLogger("test_cgd")
