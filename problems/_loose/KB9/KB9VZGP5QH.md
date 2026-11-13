---
tag: KB9VZGP5QH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=95
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Ireland
---
Each of $117$ spies, operating in a certain country, is to assign himself to one of three missions, such that every mission has at least one spy assigned. At this point, no two spies can communicate. Headquarters will then sequentially issue a number of passwords, each of which allows a single pair of spies to communicate. Passwords may only be issued to a pair of spies who share the same mission and who cannot already communicate directly. However, apart from these rules, headquarters may assign passwords in any fashion.

A mission is said to be networked if any two spies on that mission can communicate (possibly through other spies). Let $n$ denote the number of passwords issued for which, regardless of how headquarters assigns these passwords, the spies can be certain that at least one mission will be networked. How should the spies choose their missions in order to minimize $n$?
