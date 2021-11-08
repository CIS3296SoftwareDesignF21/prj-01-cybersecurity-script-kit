csk: src/csk.py
	pyinstaller -F src/csk.py

install: src/csk.py
	make csk
	cp dist/csk /usr/local/bin/csk

