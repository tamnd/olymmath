---
tag: HF1TMJAQWK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Austrian MO Regional Competition
    url: https://artofproblemsolving.com/community/c6h3285817
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1477
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190946
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Austria/train/0000.parquet#row=232
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: at-oemo-reg/2024
    source: hf-ai-mo-aops
    label: 2024 Austrian MO Regional Competition
  - at: at-oemo
    source: hf-mathnet
    label: Austria Austrian Mathematical Olympiad
---
On a table, we have ten thousand matches, two of which are inside a bowl. Anna and Bernd play the following game: They alternate taking turns and Anna begins. A turn consists of counting the matches in the bowl, choosing a proper divisor $d$ of this number and adding $d$ matches to the bowl. The game ends when more than $2024$ matches are in the bowl. The person who played the last turn wins. Prove that Anna can win independently of how Bernd plays.

*(Richard Henner)*
