---
tag: VTCGZA8JB6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 South Africa National Olympiad
    url: https://artofproblemsolving.com/community/c6h3322263
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59726
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: za-samo/2023
    source: hf-ai-mo-aops
    label: 2023 South Africa National Olympiad
---
South Adrican Magical Flights (SAMF) operates flights between South Adrican airports. If there is a flight from airport $A$ to airpost $B$ , there will be also a flight from $B$ to $A$ .
The SAMF headquarters are located in Kimberley. Every airport that is served by Kimberley can be reached from Kimberley in precisely one way. This way of reaching Kimberley may involve stopping at other airports on the way. (For example, it may happen that you can get to Kimberley by flying from Durban to Bloemfontein and then from to Bloemfontein to Kimberley. In that case there is no other way to get from Durban to Kimberley. For example, there would be no direct Hight from Durban to Kimberley.)
An airport (other than Kimberley) is called terminal if there are flights to (and from) precisely one other airport. Suppose that there are $t$ terminal airports.
Due to budget cuts, SAMF decides to close down $k$ of the airports. It should still be possible to reach each of the remaining airports from Kimberley.
Let $C$ be the number of choices for the $k$ destinations that are discontinued. Prove that $$ \frac{t!}{k!(t-k)} \le C \le \frac{(t+k-1)!}{k!(t-1)!} . $$
