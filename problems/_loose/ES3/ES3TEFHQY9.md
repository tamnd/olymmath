---
tag: ES3TEFHQY9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h254989
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35835
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2004
    source: hf-ai-mo-aops
    label: 2004 China Team Selection Test
---
Given sequence $ \{ c_n \}$ satisfying the conditions that $ c_0=1$ , $ c_1=0$ , $ c_2=2005$ , and $ c_{n+2}=-3c_n - 4c_{n-1} +2008$ , ( $ n=1,2,3, \cdots$ ). Let $ \{ a_n \}$ be another sequence such that $ a_n=5(c_{n+1} - c_n) \cdot (502 - c_{n-1} - c_{n-2}) + 4^n \times 2004 \times 501$ , ( $ n=2,3, \cdots$ ).

Is $ a_n$ a perfect square for every $ n > 2$ ?
