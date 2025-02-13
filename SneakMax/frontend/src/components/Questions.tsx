import QuestionCard from "./SubComponents/QuestionCard"
const Questions = () => {
    return(

        <div className="w-[1030px] ml-[160px] flex flex-col">
            <div className="text-[30px] text-custom_gray_text font-bold">Часто задаваемые вопросы</div>
            <div className="w-full ml-[150px] mt-[70px] flex flex-col gap-[15px]">
                <QuestionCard
                question="Вопрос 1"
                answer="Ответ 1">

                </QuestionCard>
                <QuestionCard
                question="Вопрос 2"
                answer="Ответ 2">

                </QuestionCard>
                <QuestionCard
                question="Вопрос 3"
                answer="Ответ 3">
                    
                </QuestionCard>
                <QuestionCard
                question="Вопрос 4"
                answer="Ответ 4"> 

                </QuestionCard>
                <QuestionCard
                question="Вопрос 5"
                answer="Ответ 5"> 

                </QuestionCard>
                <QuestionCard
                question="Вопрос 6"
                answer="Ответ 6"> 
                </QuestionCard>
            </div>
        </div>
    )
}

export default Questions