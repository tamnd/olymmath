---
tag: 2XKAEM4JG3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2022195
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28965
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228973
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2012 Tournament of Towns
---
A bank has one million clients, one of whom is Inspector Gadget. Each client has a unique PIN number consisting of six digits. Dr. Claw has a list of all the clients. He is able to break into the account of any client, choose any $n$ digits of the PIN number and copy them. The n digits he copies from different clients need not be in the same $n$ positions. He can break into the account of each client, but only once. What is the smallest value of $n$ which allows Dr.Claw to determine the complete PIN number of Inspector Gadget?
