csk: *.py
	pyinstaller -F csk.py

install: *.py
	make csk
	cp dist/csk /usr/local/bin/csk

