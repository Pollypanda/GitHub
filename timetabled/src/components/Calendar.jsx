import React from "react";
import Event from "./Event";

const Calendar = () => {
    return (
        <><div className="Calendar"></div>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="time">8 am</td>
                    <Event event='Starbucks ☕️' color='green' location='Downtown'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Yolk 🍳' color='green' location='123 S Peachtree st'/>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">9 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Subway 🚊' color='pink' location='Midtown Station'/>
                    <td></td>
                    <td></td>
                    <Event event='The Bean 🫘' color='blue' location='Starbucks'/>
                </tr>
                <tr>
                    <td className="time">10 am</td>
                    <td></td>
                    <Event event='River Cruise' color='blue' location='Pharam 7'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">11 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Pad Thai' color='green' location='Prato Phee'/>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">12 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Subway 🚊' color='pink' location='North Spring Station'/>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">1 pm</td>
                    <Event event='Beach Time' color='green' location='Phuket'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">2 pm</td>
                    <td></td>
                    <td></td>
                    <Event event='Art Institute' color='blue' location='111 W Ladproaw'/>
                    <td></td>
                    <Event event='Temple' color='blue' location='Ayuttaya'/>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">3 pm</td>
                    <Event event='Floating Market' color='blue' location='Bangkok'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Subway 🚊' color='pink' location='Five Point Station'/>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">4 pm</td>
                    <td></td>
                    <td></td>
                    <Event event='Fancy Dinner' color='green' location='Pasta Vino'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">5 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Shopping' color='blue'location='Siam Paragon'/>
                    <td></td>
                </tr>
            </tbody>
        </table></>
                
            
    )
}
export default Calendar;