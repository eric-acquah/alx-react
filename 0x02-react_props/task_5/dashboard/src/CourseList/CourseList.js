import React from "react";
import { CourseListRow } from "./CourseListRow";
import PropTypes from "prop-types";
import { CourseShape } from "./CourseShape";
import "./CourseList.css"

export function CourseList({ listCourses = [] }) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader="true" />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader="true"/>
      </thead>
      <tbody>
        {listCourses.length === 0 && <CourseListRow textFirstCell="No course available yet" />}

        {listCourses.length > 0 && listCourses.map(value => {
          return <CourseListRow key={value.id} textFirstCell={value.name} textSecondCell={value.credit} />
        })}
      </tbody>
    </table>
  )
}

CourseList.propType = {listCourses: PropTypes.arrayOf(PropTypes.shape(CourseShape))}