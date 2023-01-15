FROM node:16

WORKDIR /tmp
RUN apt-get update && apt-get -y upgrade && apt-get -y dist-upgrade && apt-get install -y alien libaio1
RUN wget https://yum.oracle.com/repo/OracleLinux/OL7/oracle/instantclient/x86_64/getPackage/oracle-instantclient19.3-basiclite-19.3.0.0.0-1.x86_64.rpm
RUN alien -i --scripts oracle-instantclient*.rpm
RUN rm -f oracle-instantclient19.3*.rpm && apt-get -y autoremove && apt-get -y clean

# apt-get and system utilities

#Para insertar comandos en linux desde node (pdfToHtml)
RUN apt-get update && apt-get install -y curl apt-utils apt-transport-https poppler-utils debconf-utils gcc build-essential g++ && rm -rf /var/lib/apt/lists/*

RUN apt-get update && apt-get install -y curl apt-utils apt-transport-https debconf-utils gcc build-essential g++ && rm -rf /var/lib/apt/lists/*

# adding custom MS repository
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -
RUN curl https://packages.microsoft.com/config/ubuntu/16.04/prod.list > /etc/apt/sources.list.d/mssql-release.list

# install SQL Server tools
RUN apt-get update && ACCEPT_EULA=Y apt-get install -y mssql-tools
RUN echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc
RUN /bin/bash -c "source ~/.bashrc"

# install necessary locales
RUN apt-get install -y locales \
    && echo "en_US.UTF-8 UTF-8" > /etc/locale.gen \
    && locale-gen

# install additional utilities
RUN apt-get update && apt-get install gettext nano vim -y

WORKDIR /app

ADD ./src/package.json /app/

RUN yarn install

COPY ./src .

EXPOSE 4200

VOLUME [ "../app/node_modules" ]

CMD ["npm", "run", "dev"]