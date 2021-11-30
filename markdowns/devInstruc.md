When running the program to test if production-ready or to install the program,
the native method is suggested.

**Step 1:** Build `csk` using the `makefile`

```bash
make
```

**Step 2:** Install `csk` using the `makefile` (again).

```bash
make csk
```

**Alternatively, you can copy the executable to a location of your choice**

```bash
cp dist/csk [/path/to/installation/location]
```

**Step 3:** Add `csk` to your `PATH` environment variable.

If you used `make csk` then `/usr/local/bin/` should already be added to
your path. If you manually copied the executable to another location which
is not already in your `PATH` environment variable, then you should add it.

The alternative is to manually type out the path of your executable (**which
is not suggested for ease of use**).

**Step 4:** Run `csk`

```bash
csk [...args]
```

If you installed `csk` to another location, then the command looks like:

```bash
/path/to/csk [...args]      # For absolute path
./path/to/csk [...args]     # For relative path
../path/to/csk [...args]    # For parent-relative path
```
