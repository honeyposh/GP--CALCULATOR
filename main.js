
	const add=document.querySelector('#add')
	const courseCode=document.querySelector('#course-code')
	const unitLoad=document.querySelector('#unit')
	const score=document.querySelector("#score")
	const grade=document.querySelector('#grade')
	const point=document.querySelector("#point")
	const tbody=document.querySelector('#tbody')
	const table=document.querySelector("#table")
	const calcGp=document.querySelector("#calc-gp")
	const clear=document.querySelector("#clear")
	let gparray=[]
	let gpa=document.querySelector("#gpa")
	let points=document.querySelector('#points')
	let units=document.querySelector("#units")


function displayPointFronUnitAndScore(){
		let gradePoint;
			if(score.value < 40){
				grade.value="F"
				gradePoint=0
			}else if(score.value < 45){
				grade.value="E"
		 		gradePoint=1
			}else if(score.value < 50){
				grade.value="D"
				gradePoint=2
			}else if(score.value < 60){
				grade.value="C"
		 		gradePoint=3
			}else if(score.value < 70){
				grade.value="B"
				gradePoint=4
			}else if(score.value <= 100){
				grade.value="A"
		 		gradePoint=5
			}
			point.value=gradePoint*unit.value
		}		
	
						


add.addEventListener("click",()=>{
	if(courseCode.value==""|| unitLoad.value<=0|| grade.value==""|| score.value==""|| point.value==""){
		alert("wrong input,check and try again")
	}else{
			const tr=document.createElement("tr")
			const tdCourseCode=document.createElement("td")
			tdCourseCode.innerHTML=courseCode.value;
			const tdUnitLoad=document.createElement("td")
			tdUnitLoad.innerHTML=unitLoad.value;

			const tdScore=document.createElement("td")
			tdScore.innerHTML=score.value
			const tdGrade=document.createElement("td")
			tdGrade.innerHTML=grade.value
			const tdPoint=document.createElement("td")
			tdPoint.innerHTML=point.value
			tr.appendChild(tdCourseCode)
			tr.appendChild(tdUnitLoad)
			tr.appendChild(tdScore)
			tr.appendChild(tdGrade)
			tr.appendChild(tdPoint)
			tbody.appendChild(tr)
			table.classList.remove("display-none");
			calcGp.classList.remove("display-none");
			clear.classList.remove("display-none");
			gparray.push({'unitLoad':unitLoad.value,'point':point.value,'grade':grade.value,'score':score.value})
			courseCode.value=""
			unitLoad.value=""
			score.value=""
			grade.value=""
	       	point.value=""

	 	}
	
})

function calculate(){
		console.log("girl")
		let totalUnit=0;
		let totalPoint=0;
		let gradePoint;
			if(score.value < 40){
				grade.value="F"
				gradePoint=0
			}else if(score.value < 45){
				grade.value="E"
		 		gradePoint=1
			}else if(score.value < 50){
				grade.value="D"
				gradePoint=2
			}else if(score.value < 60){
				grade.value="C"
		 		gradePoint=3
			}else if(score.value < 70){
				grade.value="B"
				gradePoint=4
			}else if(score.value <= 100){
				grade.value="A"
		 		gradePoint=5
			}
			gparray.forEach(result=>{
			point.value=gradePoint*unit.value
			totalPoint+=parseInt(result.point)
			totalUnit+=parseInt(result.unitLoad)
			points.innerHTML=totalPoint;
			units.innerHTML=totalUnit;
			gpa.innerHTML=Math.round((totalPoint/totalUnit)*100)/100
			grade.value=""
			point.value=""
			score.value=""
			unit.value=""


			})
			
		}		
	clear.addEventListener("click",()=>{
		gparray=[]
		tbody.querySelectorAll('*').forEach(Child=>Child.remove())
		table.classList.add("display-none")
		calcGp.classList.add("display-none")
		clear.classList.add("display-none")
		gpa.innerHTML=""
		points.innerHTML=""
		units.innerHTML=""
	})