---
tag: D10P8EBP3Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h3107622
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=760
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204412
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/India/train/0000.parquet#row=221
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2023
    source: hf-ai-mo-aops
    label: 2023 India IMO Training Camp
---
In the fictional country of Mahishmati, there are $50$ cities, including a capital city. Some pairs of cities are connected by two-way flights. Given a city $A$ , an ordered list of cities $C_1,\ldots, C_{50}$ is called an *antitour* from $A$ if

- every city (including $A$ ) appears in the list exactly once, and
- for each $k\in \{1,2,\ldots, 50\}$ , it is impossible to go from $A$ to $C_k$ by a sequence of exactly $k$ (not necessarily distinct) flights.

Baahubali notices that there is an antitour from $A$ for any city $A$ . Further, he can take a sequence of flights, starting from the capital and passing through each city exactly once. Find the least possible total number of antitours from the capital city.

*Proposed by Sutanay Bhattacharya*
