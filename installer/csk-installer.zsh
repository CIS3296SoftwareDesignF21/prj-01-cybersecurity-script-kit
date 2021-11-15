wget https://github.com/CIS3296SoftwareDesignF21/prj-01-cybersecurity-script-kit/archive/refs/tags/v0.0.2-beta.zip
unzip v0.0.2-beta.zip
cd prj-01-cybersecurity-script-kit-0.0.2-beta
make clean
make
make install
cd ..
rm -rf prj-01-cybersecurity-script-kit-0.0.2-beta
rm v0.0.2-beta.zip