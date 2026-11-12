---
tag: WCH2X11QMR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1077925
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78527
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
Consider a sequence $T_0, T_1, \dots$ of polynomials defined recursively by $T_0(x) = 2$ , $T_1(x)=x$ , and $T_{n+2}(x) = xT_{n+1}(x) - T_n(x)$ for each nonnegative integer $n$ . Let $L_n$ be the sequence of Lucas Numbers, defined by $L_0 = 2$ , $L_1 = 1$ , and $L_{n+2} = L_n+L_{n+1}$ for every nonnegative integer $n$ .

Find the remainder when $ T_0\left( L_0 \right) + T_1 \left( L_2 \right) + T_2 \left( L_4 \right) + \dots + T_{359} \left( L_{718} \right)$ is divided by $359$ .

*Proposed by Yang Liu*
