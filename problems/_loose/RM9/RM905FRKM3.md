---
tag: RM905FRKM3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Argentina National Olympiad Level 2
    url: https://artofproblemsolving.com/community/c6h3467843
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29922
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2018
    source: hf-ai-mo-aops
    label: 2018 Argentina National Olympiad Level 2
---
There are $456$ people around a circle, denoted as $X_1, X_2, \dots, X_{456}$ , and each one of them thought of a number. Every time Laura says an integer $k$ with $2 \leqslant k \leqslant 100$ , the announcer announces all the numbers $p_1, p_2, \dots, p_{456}$ , which are the averages of the numbers thought by the people in all the groups of $k$ consecutive people: $p_1$ is the average of the numbers thought by the people from $X_1$ to $X_k$ , $p_2$ is the average of the numbers thought by the people from $X_2$ to $X_{k+1}$ , and so on until $p_{456}$ , the average of the numbers thought by the people from $X_{456}$ to $X_{k-1}$ . Determine how many numbers $k$ Laura must say at a minimum so that, with certainty, the announcer can know the number thought by the person $X_{456}$ .
