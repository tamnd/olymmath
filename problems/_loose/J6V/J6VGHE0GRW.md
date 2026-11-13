---
tag: J6VGHE0GRW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1971 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h91410
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39206
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236506
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1971
    source: hf-ai-mo-aops
    label: 1971 Bundeswettbewerb Mathematik
---
The inhabitants of a planet speak a language only using the letters $A$ and $O$ . To avoid mistakes, any two words of equal length differ at least on three positions. Show that there are not more than $\frac{2^n}{n+1}$ words with $n$ letters.
