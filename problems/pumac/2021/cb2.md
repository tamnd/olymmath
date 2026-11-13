---
tag: SNSEX1ZC3A
kind: problem
appearances:
  - at: pumac/2021/cb2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2021_Combo_B.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2825132
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73277
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263198
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Neel and Roshan are going to the Newark Liberty International Airport to catch separate flights. Neel plans to arrive at some random time between 5:30 am and 6:30 am, while Roshan plans to arrive at some random time between 5:40 am and 6:40 am. The two want to meet, however briefly, before going through airport security. As such, they agree that each will wait for $n$ minutes once he arrives at the airport before going through security. What is the smallest $n$ they can select such that they meet with at least 50% probability? The answer will be of the form $a + b\sqrt{c}$ for integers $a$ , $b$ , and $c$ , where $c$ has no perfect square factor other than $1$ . Report $a + b + c.$
