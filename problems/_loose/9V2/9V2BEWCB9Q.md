---
tag: 9V2BEWCB9Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185959
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the state of Wegedonia, there is a road network. At each intersection and each entrance of the roads in this network, there is a traffic post.

The length of each road segment between any two adjacent posts is less than $100 \mathrm{~km}$. Each traffic post can be reached from any other on a total route within the network that is shorter than 100 km.

Furthermore, for each road segment between two adjacent traffic posts:

If exactly this road segment is closed, it is still possible to reach every traffic post from any other using a total route that consists only of unblocked road segments of the network.

Prove that this can be done on a route that is shorter than $300 \mathrm{~km}$.
