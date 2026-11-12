---
tag: YMT1PAYX16
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h2118753
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19487
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2020
    source: hf-ai-mo-aops
    label: 2020 Taiwan TST Round 2
---
There are $n$ cities in a country, where $n>1$ . There are railroads connecting some of the cities so that you can travel between any two cities through a series of railroads (railroads run in both direction.) In addition, in this country, it is impossible to travel from a city, through a series of distinct cities, and return back to the original city. We define the **degree** of a city as the number of cities directly connected to it by a single segment of railroad. For a city $A$ that is directly connected to $x$ cities, with $y$ of those cities having a smaller degree than city $A$ , the **significance** of city $A$ is defined as $\frac{y}{x}$ .

Find the smallest positive real number $t$ so that, for any $n>1$ , the sum of the significance of all cities is less than $tn$ , no matter how the railroads are paved.

*Proposed by houkai*
