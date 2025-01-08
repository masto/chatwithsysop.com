---
title: "How I Saved Christmas... 1984 [Part 2]"
authors: [masto]
---

This will be the second part.

<!-- truncate -->

TODO: write this

Notes to self.

- Setting up system-rescue.org
- Turning off the firewall and setting rootpass
- copytoram and mounting the USB stick writable
- realizing DVDs are over the FAT32 limit
- mounting remote filesystem: mkdir /mnt/syn; mount -t cifs //synology/foo
  /mnt/syn -o username=foo

```yaml
---
global:
  copytoram: true
  checksum: false
  loadsrm: false
  dostartx: false
  dovnc: false
  noautologin: false
  nofirewall: true
  setkmap: "dvorak"
  rootpass: "xxx"

autorun:
  ar_disable: false
  ar_nowait: true
  ar_nodel: false
  ar_attempts: 1
  ar_ignorefail: false
  ar_suffixes: "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F"
  exec:
    100:
      path: "mkdir"
      parameters:
        - "/mnt/usb"
    200:
      path: "mount"
      parameters:
        - "/dev/sdc1"
        - "/mnt/usb"
      wait: on_error

sysconfig:
  bash_history:
    100: "mount /dev/sdc1 /mnt/usb"
```

Some commands to talk about:

ddrescue -b 2048 -vv -nN --size 87228416 --cpass 1 /dev/rdisk6 dvd.iso
rescue.log

ddrescue -b 2048 -vv -nN -C --cpass 1 /dev/rdisk6 dvd.iso rescue.log

ddrescue -b 2048 -vv -n -C --cpass 1 /dev/rdisk6 dvd.iso rescue.log

On Linux: /dev/sr0
