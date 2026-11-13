---
tag: A6NEYJXSNZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h130897
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32878
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231925
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2007
    source: hf-ai-mo-aops
    label: 2007 Olympic Revenge
---
Let $a, b, c \in \mathbb{R}$ with $abc = 1$ . Prove that
$$a^{2}+b^{2}+c^{2}+{1\over a^{2}}+{1\over b^{2}}+{1\over c^{2}}+2\left(a+b+c+{1\over a}+{1\over b}+{1\over c}\right) \geq 6+2\left({b\over a}+{c\over b}+{a\over c}+{c\over a}+{c\over b}+{b\over c}\right)$$
