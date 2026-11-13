---
tag: 56FHZCVDVV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Serbia National Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2560873
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20479
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221991
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rs-smo/2021
    source: hf-ai-mo-aops
    label: 2021 Serbia National Math Olympiad
---
In the country of Graphia there are $100$ towns, each numbered from $1$ to $100$ . Some pairs of towns may be connected by a (direct) road and we call such pairs of towns *adjacent*. No two roads connect the same pair of towns.

Peter, a foreign tourist, plans to visit Graphia $100$ times. For each $i$ , $i=1,2,\dots, 100$ , Peter starts his $i$ -th trip by arriving in the town numbered $i$ and then each following day Peter travels from the town he is currently in to an adjacent town with the lowest assigned number, assuming such that a town exists and that he hasn't visited it already on the $i$ -th trip. Otherwise, Peter deems his $i$ -th trip to be complete and returns home.

It turns out that after all $100$ trips, Peter has visited each town in Graphia the same number of times. Find the largest possible number of roads in Graphia.
