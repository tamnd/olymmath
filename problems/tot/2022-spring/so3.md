---
tag: WF7DNBR2P7
kind: problem
appearances:
  - at: tot/2022-spring/so3
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 67069
    url: https://problems.ru/view_problem_details_new.php?id=67069
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: AI-MO AoPS
    url: https://huggingface.co/datasets/project-numina/aops
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-aops-wiki
    name: AoPS wiki problems
    url: https://artofproblemsolving.com/community/c6h2842698p25183829
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Let us call a sequence $a_1,a_2,\dots,a_n$ interesting if for any $i=1,2,\dots,n$ either $a_i=i$ or $a_i=i+1$ . Let us call an interesting sequence even if the sum of its members is even, and odd otherwise. Alice has multiplied all numbers in each odd interesting sequence and has written the result in her notebook. Bob, in his notebook, has done the same for each even interesting sequence. In which notebook is the sum of the numbers greater than by how much? (The answer may depend on $n$ .)
