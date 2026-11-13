---
tag: VAFXMXTVHB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1990 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2485143
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28116
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228464
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1990 Tournament Of Towns
---
We call a collection of weights (each weighing an integer value) basic if their total weight equals $200$ and each object of integer weight not greater than $200$ can be balanced exactly with a uniquely determined set of weights from the collection. (Uniquely means that we are not concerned with order or which weights of equalc value are chosen to balance against a particular object, if in fact there is a choice.)
(a) Find an example of a basic collection other than the collection of $200$ weights each of value $1$ .
(b) How many different basic collections are there?

(D. Fomin, Leningrad)
