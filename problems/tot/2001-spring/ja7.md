---
tag: 2M2W2QB6Q2
kind: problem
appearances:
  - at: tot/2001-spring/ja7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 98524
    url: https://problems.ru/view_problem_details_new.php?id=98524
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
    url: https://artofproblemsolving.com/community/c6h424961p2404855
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alex thinks of a two-digit integer (any integer between $10$ and $99$ ). Greg is trying to guess it. If the number Greg names is correct, or if one of its digits is equal to the corresponding digit of Alex's number and the other digit differs by one from the corresponding digit of Alex's number, then Alex says "hot"; otherwise, he says "cold". (For example, if Alex's number was $65$ , then by naming any of $64, 65, 66, 55$ or $75$ Greg will be answered "hot", otherwise he will be answered "cold".)

[list]**(a)** Prove that there is no strategy which guarantees that Greg will guess Alex's number in no more than 18 attempts.**(b)** Find a strategy for Greg to find out Alex's number (regardless of what the chosen number was) using no more than $24$ attempts.**(c)** Is there a $22$ attempt winning strategy for Greg?[/list]
