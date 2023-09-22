# syntax=docker/dockerfile:1
ARG PLONE_VERSION=6.0.7
FROM plone/server-builder:${PLONE_VERSION} as builder

WORKDIR /app

# Add local code
COPY . .

# Install local requirements and pre-compile mo files
RUN <<EOT
    set -e
    bin/pip install mxdev
    mv requirements-docker.txt requirements.txt
    sed -i 's/-e src\/test_cgd\[test\]/src\/test_cgd/g' mx.ini
    bin/mxdev -c mx.ini
    bin/pip install -r requirements-mxdev.txt
    bin/python /compile_mo.py
    rm -Rf src/
EOT

FROM plone/server-prod-config:${PLONE_VERSION}

LABEL maintainer="Klésio <klesio.dev@gmail.com>" \
      org.label-schema.name="test-cgd-backend" \
      org.label-schema.description="test-cgd backend image." \
      org.label-schema.vendor="Klésio"

# Copy /app from builder
COPY --from=builder /app /app

RUN <<EOT
    set -e
    ln -s /data /app/var
EOT
