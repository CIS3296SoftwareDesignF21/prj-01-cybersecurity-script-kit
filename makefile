csk: src/csk.py
	pyinstaller -F src/csk.py --paths=src

install: src/csk.py
	# make csk
	cp dist/csk /usr/local/bin/csk

clean:
	rm -rf build dist csk.spec

