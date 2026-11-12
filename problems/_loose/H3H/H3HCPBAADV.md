---
tag: H3HCPBAADV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 BMT Spring
    url: https://artofproblemsolving.com/community/c6h3273482
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70050
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2017
    source: hf-ai-mo-aops
    label: 2017 BMT Spring
---
A light has been placed on every lattice point (point with integer coordinates) on the (infinite) 2 $D$ plane. Dene the Chebyshev distance between points $(x_1,y_1)$ and $(x_2, y_2)$ to be $\ max (|x_1 - x_2|, |y_1 -y_2|)$ . Each light is turned on with probability $\frac{1}{2^{d/2}}$ , where $d$ is the Chebyshev distance from that point to the origin. What is expected number of lights that have all their directly adjacent lights turned on? (Adjacent points being points such that $|x_1-x_2|+|y_1- y_2| =1$ .)
