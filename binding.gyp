{
    "targets": [{
        "target_name": "nfc-binding",
        "sources": ["src/nfc.cc", "src/nfc-reader.cc", "src/nfc-poll.cc",
            "src/nfc-release.cc", "src/nfc-transceive.cc", "src/nfc-utils.c","src/nfc-emulate-forum-tag4.c", "src/tools.cc",
            "src/addon.cc"],
        "libraries": ["-lnfc", "-L/usr/local/lib/", "-L/usr/lib/"],
        "include_dirs": [
            "<!(node -e \"require('nan')\")",
            "/usr/local/include/",
            "/usr/include/"
        ]
    }]
}
