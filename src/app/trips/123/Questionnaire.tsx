'use client';
import React, {useState} from "react";
import {Box, Button, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";


const travelQuestions = [
    {
        id: 'travel-type',
        question: 'Are you catching a plane?',
        inputs: () => {
            return [
                {
                    id: 'plane-yes-no',
                    type: 'radio',
                    options: [
                        {
                            id: 'plane-yes',
                            answer: 'Yes',
                        },
                        {
                            id: 'plane-no',
                            answer: 'No',
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 'travel-with-children',
        question: 'Are you travelling with children?',
        inputs: () => {
            return [
                {
                    id: 'children-yes-no',
                    type: 'select',
                    options: [
                        {
                            id: 'children-yes',
                            answer: 'Yes',
                        },
                        {
                            id: 'children-no',
                            answer: 'No',
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 'children-amount',
        question: 'How many children are you travelling with?',
        shouldDisplay: (answers: any) => {

            if (typeof answers['children-yes-no'] === 'undefined') {
                return true;
            }

            return answers['children-yes-no'].toLowerCase() === 'yes';
        },
        inputs: () => {
            return [
                {
                    id: 'children-amount',
                    type: 'select',
                    options: Array.from(Array(10).keys()).map(i => {
                        return {
                            id: 'children-amount-' + (i + 1),
                            answer: (i + 1).toString(),
                        }
                    })
                }
            ]
        }
    },
    {
        id: 'travel-with-children-age',
        question: 'What are the ages of your children?',
        shouldDisplay: (answers: any) => {

            if (typeof answers['children-yes-no'] === 'undefined') {
                return true;
            }

            return answers['children-yes-no'].toLowerCase() === 'yes';
        },
        inputs: (answers : any) => {

            const childrenAmount = answers['children-amount'];

            console.log('childrenAmount', childrenAmount);

            return Array.from(Array(Number(childrenAmount)).keys()).map( (num) => {
                return {
                    id: 'children-age-' + num ,
                    type: 'select',
                    options: Array.from(Array(10).keys()).map (i => { // TODO Find out airlines max 'children' age.
                        return {
                            id: 'children-age-' + (i + 1),
                            answer: (i + 1).toString(),
                        }
                    })
                }
            });


        }
    },
    {
       /* shouldDisplay: (answers: any) => {

            if (typeof answers['plane-yes-no'] === 'undefined') {
                return true;
            }

            return answers['plane-yes-no'] === 'plane-yes'; // TODO Determine if overseas....
        },*/
        question: 'Are you travelling internationally?',
        inputs: () => {
            return [
                {
                    id: 'travelling-internationally-yes-no',
                    type: 'radio',
                    options: [
                        {
                            id: 'travelling-internationally-yes',
                            answer: 'Yes',
                        },
                        {
                            id: 'travelling-internationally-no',
                            answer: 'No',
                        }
                    ]
                }
            ]
        }
    },
    {
        shouldDisplay: (answers: any) => {

            if (typeof answers['travelling-internationally-yes-no'] === 'undefined') {
                return true;
            }

            return answers['travelling-internationally-yes-no'].toLowerCase() === 'yes'; // TODO Determine if overseas....
        },
        question: 'Have you got your passport?',
        inputs: () => {
            return [
                {
                    id: 'passport-yes-no',
                    type: 'radio',
                    options: [
                        {
                            id: 'passport-yes',
                            answer: 'Yes',
                        },
                        {
                            id: 'passport-no',
                            answer: 'No',
                        }
                    ]
                }
            ]
        }
    },
    {
        shouldDisplay: (answers: any) => {

            if (typeof answers['travelling-internationally-yes-no'] === 'undefined') {
                return true;
            }

            return answers['travelling-internationally-yes-no'].toLowerCase() === 'yes'; // TODO Determine if overseas....
        },
        question: 'Do you have a pre-existing medical condition?',
        inputs: () => {
            return [
                {
                    id: 'pre-existing-medical-condition-yes-no',
                    type: 'radio',
                    options: [
                        {
                            id: 'pre-existing-medical-condition-yes',
                            answer: 'Yes',
                        },
                        {
                            id: 'pre-existing-medical-condition-no',
                            answer: 'No',
                        }
                    ]
                }
            ]
        }
    },

]

function doesQuestionNotHaveCondition(nextQuestion: any) {
    return typeof nextQuestion !== 'undefined' && typeof nextQuestion?.shouldDisplay === 'undefined';
}

export function determineNextQuestion(answers: any, currentIndex: number) : number {
    let questionIndex = currentIndex;
    let nextQuestion = travelQuestions[questionIndex + 1];

    console.log('determineNextQuestion', answers, currentIndex, nextQuestion)

    if (doesQuestionNotHaveCondition(nextQuestion)) {
        console.log('doesQuestionNotHaveCondition', answers, currentIndex, nextQuestion)
        return currentIndex + 1;
    }

    questionIndex = currentIndex + 1;
    nextQuestion = travelQuestions[questionIndex];

    while (typeof nextQuestion !== 'undefined' && typeof nextQuestion?.shouldDisplay !== 'undefined' && nextQuestion?.shouldDisplay?.(answers) === false) {
        console.log('nextQuestion', nextQuestion, answers, nextQuestion?.shouldDisplay?.(answers));
        const nextIndex = questionIndex + 1;
        questionIndex = nextIndex;
        //setCurrentIndex(nextIndex);
        nextQuestion = travelQuestions[nextIndex];
    }

    return questionIndex;
}

export function Questionnaire() {

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [answers, setAnswers] = useState<any>([]);


    const nextQuestion = (answers: any) => {
        setCurrentIndex(determineNextQuestion(answers, currentIndex));
    }

    const setAnswerAndNext = (id: string, value: string) => {
        const answersToUpdate = {...answers, [id]: value};
        setAnswers(answersToUpdate);

        nextQuestion(answersToUpdate);
    }

    const setAnswersToState = (id: string, value: string) => {
        const answersToUpdate = {...answers, [id]: value};
        setAnswers(answersToUpdate);
    }

    /*const setAnswersChangeEvent = (event: SelectChangeEvent) => {

        const target = event.target as HTMLInputElement;
        const value = target.value;
        const id = target.id;
        console.log('setAnswersChangeEvent', value, id);
        setAnswers({...answers, [id]: value});

    }*/

    const currentQuestion = travelQuestions[currentIndex];
    if (typeof currentQuestion === 'undefined') {
        return <Box>
            <Typography>Thank you for completing the questionnaire</Typography>
        </Box>
    }


    console.log('currentQuestion', currentQuestion, answers, currentIndex, travelQuestions.length);

    const hasMultipleInputs = currentQuestion.inputs(answers).length > 1;

    return <Box key={currentQuestion.question}>

        <Box sx={{display: 'flex', alignItems: 'center', padding: 2, flexDirection: 'column'}}>
            <Typography component={"div"}>{currentQuestion.question}</Typography>
            {currentQuestion.inputs && currentQuestion.inputs(answers).map( (input: any) => {
               if (input.type === 'select') {
                   console.log('input.options.length', input.options.length)
                   const answerValue = answers[input.id];
                   console.log('answerValue', answerValue)
                   return <>
                       <Select key={input.id} id={input.id} value={answerValue || ''}>
                           {input.options.map( (option: any) => {
                               const onClick = () => hasMultipleInputs ? setAnswersToState(input.id, option.answer) : setAnswerAndNext(input.id, option.answer);
                               return <MenuItem onClick={onClick} key={option.id} value={option.answer || ''}>{option.answer}</MenuItem>
                           })}
                       </Select>
                   </>
               } else if (input.type === 'radio') {
                   return <Box key={input.id}>
                       {input.options.map( (option: any) => {
                           return <Button  onClick={() => setAnswerAndNext(input.id, option.id)} key={option.id}>{option.answer}</Button>
                       })}
                   </Box>
               }
            })}

            {hasMultipleInputs && <Button onClick={() =>  setCurrentIndex(currentIndex + 1)}>Next</Button>}

        </Box>

        {/*<Box component={"div"} sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <Box component={"div"}>
                <Button variant={'contained'} onClick={nextQuestion}>Next</Button>
            </Box>
        </Box>*/}


    </Box>




}